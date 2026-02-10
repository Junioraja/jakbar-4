'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useGameContext } from '@/contexts/GameContext'
import { BADGES } from '@/data/gameData'
import { Lock, Star } from 'lucide-react'

export default function BadgesDisplay() {
  const { progress } = useGameContext()

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      {BADGES.map((badge, index) => {
        const isUnlocked = progress.unlockedBadges.has(badge.id)
        
        return (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: isUnlocked ? 1.05 : 1 }}
          >
            <Card className={`relative overflow-hidden cursor-default transition-all ${
              isUnlocked
                ? 'border-2 border-yellow-500 bg-gradient-to-br from-yellow-950 to-yellow-900'
                : 'border-2 border-gray-600 bg-slate-900/50 opacity-50'
            }`}>
              <CardContent className="p-4 text-center">
                <motion.div
                  animate={isUnlocked ? { scale: [1, 1.2, 1] } : {}}
                  transition={{
                    duration: 2,
                    repeat: isUnlocked ? Infinity : 0,
                    repeatType: 'reverse'
                  }}
                  className="text-4xl mb-2"
                >
                  {isUnlocked ? badge.emoji : '🔒'}
                </motion.div>
                
                <h3 className="font-bold text-sm text-white mb-1">
                  {badge.name}
                </h3>
                
                <p className="text-xs text-gray-400 mb-3">
                  {badge.description}
                </p>

                {isUnlocked && (
                  <Badge variant="outline" className="bg-yellow-500/20 text-yellow-300 border-yellow-500">
                    <Star className="h-3 w-3 mr-1" />
                    Unlocked
                  </Badge>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}
