import { useState, useMemo } from 'react'
import { lessons } from '../../lessons/lessons'
import { Link } from 'react-router-dom'
import './Search.scss'

const allLessons = Object.entries(lessons).flatMap(([subjectKey, subject]) =>
  Object.entries(subject.lessons).map(([lessonKey, lesson]) => ({
    subjectKey,
    lessonKey,
    subject: subject.title,
    title: lesson.title,
  }))
)

export default function Search() {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return allLessons.filter((lesson) => lesson.title.toLowerCase().includes(q))
  }, [query])

  return (
    <div className="search">
      <input
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {results.length > 0 && (
        <div className="search-results">
          {results.map((lesson) => (
            <Link key={`${lesson.subjectKey}-${lesson.lessonKey}`} to={`/${lesson.subjectKey}/${lesson.lessonKey}`} onClick={() => setQuery('')}>
              {`${lesson.subject} ~ ${lesson.title}`}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}