'use client'

import { Fragment } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin, Clock, DollarSign } from 'lucide-react'

interface TransportData {
  type: string
  icon: React.ReactNode
  description?: string
  cost?: string
  time?: string
  dropoffLocation?: string
  steps?: string[]
}

export default function TransportModal({ data, onClose }: { data: TransportData | null; onClose: () => void }) {
  if (!data) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-end md:items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-full md:max-w-2xl rounded-t-3xl md:rounded-2xl p-6 max-h-[90vh] overflow-y-auto shadow-2xl ring-1 ring-black/5"
          initial={{ y: 220 }}
          animate={{ y: 0 }}
          exit={{ y: 220 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="mx-auto mb-3 w-12">
            <div className="h-1.5 bg-slate-200 rounded-full" />
          </div>

          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="text-3xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl p-2 shadow-sm">{data.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{data.type}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{data.description}</p>
              </div>
            </div>

            <button onClick={onClose} aria-label="Close" className="text-gray-400 hover:text-gray-600">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch">
            <div className="md:col-span-2 rounded-xl overflow-hidden bg-slate-50">
              <div className="w-full h-56 md:h-64 bg-gradient-to-tr from-slate-100 to-white flex items-center justify-center">
                <iframe
                  src={data.type === 'TransJakarta' ? 'https://www.google.com/maps?q=Halte+Glodok&output=embed' : `https://www.google.com/maps?q=${encodeURIComponent(data.type)}&output=embed`}
                  className="w-full h-full border-0"
                  loading="lazy"
                  title="rute-map"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white shadow-sm">
                <MapPin className="h-4 w-4 text-blue-600" />
                <div className="text-sm text-gray-700">Titik Turun: <span className="font-medium text-gray-900">{data.dropoffLocation ?? 'Pecinan Glodok'}</span></div>
              </div>

              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white shadow-sm">
                <DollarSign className="h-4 w-4 text-amber-500" />
                <div className="text-sm text-gray-700">Biaya: <span className="font-medium text-gray-900">{data.cost ?? '-'}</span></div>
              </div>

              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white shadow-sm">
                <Clock className="h-4 w-4 text-green-500" />
                <div className="text-sm text-gray-700">Waktu: <span className="font-medium text-gray-900">{data.time ?? '-'}</span></div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              📍 Langkah-langkah
            </h4>
            <ol className="space-y-2">
              {data.steps && data.steps.length > 0 ? (
                data.steps.map((step, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">{idx + 1}</span>
                    <span>{step}</span>
                  </li>
                ))
              ) : (
                <li className="text-sm text-gray-600">{data.description}</li>
              )}
            </ol>
          </div>

          <div className="mt-5 flex gap-3">
            <a
              href={data.type === 'TransJakarta' ? 'https://www.google.com/maps/search/Halte+Glodok' : `https://www.google.com/maps/search/${encodeURIComponent(data.type)}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl shadow-md transition"
            >
              📍 Buka Google Maps
            </a>

            <button
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center gap-2 border border-slate-200 bg-white py-2 rounded-xl hover:shadow-sm transition"
            >
              Tutup
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
