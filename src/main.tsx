import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Log environment variables (without sensitive values)
console.log('Environment variables loaded:', {
    hasSupabaseUrl: !!import.meta.env.VITE_SUPABASE_URL,
    hasSupabaseKey: !!import.meta.env.VITE_SUPABASE_ANON_KEY,
    hasFirebaseConfig: !!import.meta.env.VITE_FIREBASE_API_KEY
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
