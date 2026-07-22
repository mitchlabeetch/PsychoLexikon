import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import SubjectCard from '@/components/SubjectCard'
import { listArticles } from '@/content/api'

import { useMemo } from 'react'

export default function Home() {
  const articles = listArticles()
  const featuredArticles = useMemo(() => articles.filter((article) => article.meta.tabNumber <= 12), [articles])

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className="text-center mb-0 sm:mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      >
        <h1 className="font-display font-bold text-[1rem] sm:text-[3rem] text-text-primary tracking-[-0.02em] leading-tight mb-3">
          PsychoLexicon
        </h1>
        <p className="font-body text-[0.75rem] sm:text-[1.125rem] text-text-secondary mb-6">
          Zwölf Kernthemen plus verknüpfte Vertiefungen — verständlich, fundiert, lernfreundlich
        </p>
        <div className="w-[60%] h-px bg-[#ccc] mx-auto mb-[4px] sm:mb-6" />
        <p className="font-body text-sm sm:text-base text-text-primary max-w-[600px] mx-auto leading-relaxed">
          PsychoLexicon bündelt zwölf Kernthemen des ersten Psychologie-Studienjahres und ergänzt sie um verknüpfte Konzeptseiten für die Vertiefung. Jedes Thema ist übersichtlich gegliedert: kurze Absätze, klare Zwischentitel, erklärende Visualisierungen — wissenschaftlich fundiert und leicht verständlich.
        </p>
      </motion.section>

      {/* Subject Grid */}
      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6 pt-3 pb-12 sm:py-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
      >
        {featuredArticles.map((subject) => (
          <motion.div
            key={subject.id}
            className="h-full"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                },
              },
            }}
          >
            <SubjectCard subject={subject} />
          </motion.div>
        ))}
      </motion.section>

      <Footer />
    </div>
  )
}
