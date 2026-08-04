import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, Polyline, useMap } from 'react-leaflet';
import "./TourMap.css";

const GEOCODE_CACHE_KEY = 'amatsiko-geocode-cache';

function getCache() {
  try {
    return JSON.parse(localStorage.getItem(GEOCODE_CACHE_KEY)) || {};
  } catch {
    return {};
  }
}

// private browsing etc
function saveToCache(key, value) {
  try {
    const cache = getCache();
    cache[key] = value;
    localStorage.setItem(GEOCODE_CACHE_KEY, JSON.stringify(cache));
  } catch {
  }
}

async function geocodePlace(placeName) {
  const cacheKey = placeName.toLowerCase().trim();
  const cache = getCache();
  if (cache[cacheKey]) return cache[cacheKey];

  const query = encodeURIComponent(`${placeName}, Uganda`);
  const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${query}`;

  const response = await fetch(url);
  if (!response.ok) return null;

  const results = await response.json();
  if (!results.length) return null;

  const point = {
    name: placeName,
    lat: parseFloat(results[0].lat),
    lng: parseFloat(results[0].lon),
  };

  saveToCache(cacheKey, point);
  return point;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Re-centers/fits the map whenever the set of points changes.
function FitBounds({ points }) {
  const map = useMap();

  useEffect(() => {
    if (!points.length) return;

    if (points.length === 1) {
      map.setView([points[0].lat, points[0].lng], 9);
    } else {
      const bounds = points.map((p) => [p.lat, p.lng]);
      map.fitBounds(bounds, { padding: [40, 40] });
    }
  }, [points, map]);

  return null;
}

function TourMap({ location }) {
  const [points, setPoints] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | error

  useEffect(() => {
    let cancelled = false;

    async function geocodeAll() {
      setStatus('loading');
      const placeNames = location
        .split(',')
        .map((name) => name.trim())
        .filter(Boolean);

      const found = [];
      for (const placeName of placeNames) {
        const point = await geocodePlace(placeName);
        if (point) found.push(point);
        await wait(1000); 
        if (cancelled) return;
      }

      if (!cancelled) {
        setPoints(found);
        setStatus(found.length ? 'ready' : 'error');
      }
    }

    geocodeAll();

    return () => {
      cancelled = true;
    };
  }, [location]);

  if (status === 'loading') {
    return <div className="tour-map-status">Loading map…</div>;
  }

  if (status === 'error') {
    return <div className="tour-map-status">Map unavailable for this tour's locations.</div>;
  }

  // Uganda's rough center as a fallback starting view before bounds fit.
  const initialCenter = [1.3733, 32.2903];

  return (
    <div className="tour-map-wrapper">
      <MapContainer center={initialCenter} zoom={7} className="tour-map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {points.map((point, i) => (
          <CircleMarker
            key={i}
            center={[point.lat, point.lng]}
            radius={8}
            pathOptions={{
              color: '#023220',
              weight: 2,
              fillColor: '#E2725C',
              fillOpacity: 1,
            }}
          >
            <Popup>{point.name}</Popup>
          </CircleMarker>
        ))}

        {points.length > 1 && (
          <Polyline
            positions={points.map((p) => [p.lat, p.lng])}
            pathOptions={{ color: '#E2725C', weight: 5, dashArray: '3 9' }}
          />
        )}

        <FitBounds points={points} />
      </MapContainer>

      {points.length > 1 && (
        <p className="tour-map-note">
          Dashed line: the general travel order.
        </p>
      )}
    </div>
  );
}

export default TourMap;