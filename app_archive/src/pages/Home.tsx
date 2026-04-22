import { motion } from 'framer-motion'
import { subjectsData } from '@/data/subjects'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SubjectCard from '@/components/SubjectCard'

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      >
        <h1 className="font-display font-bold text-[3rem] text-text-primary tracking-[-0.02em] leading-tight mb-3">
          PSYCHLERN
        </h1>
        <p className="font-body text-[1.125rem] text-text-secondary mb-6">
          Zwölf Kernthemen — verständlich, fundiert, adhs-freundlich
        </p>
        <div className="w-[60%] h-px bg-[#ccc] mx-auto mb-6" />
        <p className="font-body text-[1rem] text-text-primary max-w-[600px] mx-auto leading-relaxed">
          PSYCHLERN bündelt zwölf Kernthemen des ersten Psychologie-Studienjahres. Jedes Thema ist auf ADHS-freundliches Lernen optimiert: kurze Absätze, klare Zwischentitel, erklärende Visualisierungen. Alle Inhalte sind wissenschaftlich fundiert und vollständig auf Deutsch.
        </p>
      </motion.section>

      {/* Subject Grid */}
      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12"
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
        {subjectsData.map((subject) => (
          <motion.div
            key={subject.id}
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
