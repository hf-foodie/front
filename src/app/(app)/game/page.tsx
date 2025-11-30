'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'

const Wheel = dynamic(() => import('react-custom-roulette-r19').then((mod) => mod.Wheel), { ssr: false })

const initialData = [
  { option: '구내식당', style: { backgroundColor: '#EF4444', textColor: 'white' } },
  { option: '풍국면', style: { backgroundColor: '#F97316', textColor: 'white' } },
  { option: '동동국밥', style: { backgroundColor: '#FBBF24', textColor: 'white' } },
  { option: '미도방', style: { backgroundColor: '#22C55E', textColor: 'white' } },
  { option: '나진국밥', style: { backgroundColor: '#3B82F6', textColor: 'white' } },
  { option: '마루카츠', style: { backgroundColor: '#6366F1', textColor: 'white' } },
  { option: '네이볼', style: { backgroundColor: '#8B5CF6', textColor: 'white' } },
]

const GamePage = () => {
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)
  const [wheelData, setWheelData] = useState(initialData)
  const [results, setResults] = useState<string[]>([])

  // CRUD state
  const [newItem, setNewItem] = useState('')
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editingText, setEditingText] = useState('')

  const handleSpinClick = () => {
    if (!mustSpin && wheelData.length > 0) {
      const newPrizeNumber = Math.floor(Math.random() * wheelData.length)
      setPrizeNumber(newPrizeNumber)
      setMustSpin(true)
    }
  }

  const handleAddItem = () => {
    if (newItem.trim() === '') return
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    const newEntry = {
      option: newItem,
      style: { backgroundColor: randomColor, textColor: 'white' },
    }
    setWheelData([...wheelData, newEntry])
    setNewItem('')
  }

  const handleDeleteItem = (index: number) => {
    setWheelData(wheelData.filter((_, i) => i !== index))
  }

  const handleEditItem = (index: number) => {
    setEditingIndex(index)
    setEditingText(wheelData[index].option)
  }

  const handleSaveItem = (index: number) => {
    if (editingText.trim() === '') return
    const updatedData = [...wheelData]
    updatedData[index].option = editingText
    setWheelData(updatedData)
    setEditingIndex(null)
    setEditingText('')
  }

  const handleDeleteAll = () => {
    if (typeof window !== 'undefined' && window.confirm('정말로 모든 메뉴를 삭제하시겠습니까?')) {
      setWheelData([])
    }
  }

  const handleReset = () => {
    if (typeof window !== 'undefined' && window.confirm('메뉴를 초기 상태로 되돌리시겠습니까?')) {
      setWheelData(initialData)
    }
  }

  const handleClearResults = () => {
    setResults([])
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-100 p-4 dark:bg-neutral-900">
      <h1 className="mb-10 text-4xl font-bold">오늘 뭐 먹지?</h1>
      <div className="grid w-full max-w-6xl grid-cols-1 items-start gap-10 md:grid-cols-3">
        {/* Roulette Wheel */}
        <div className="col-span-1 flex flex-col items-center justify-center md:col-span-2">
          {wheelData.length > 0 ? (
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={wheelData}
              onStopSpinning={() => {
                setMustSpin(false)
                const winner = wheelData[prizeNumber]?.option || ''
                alert(`오늘은 ${winner} 먹는 날!`)
                setResults([...results, winner])
              }}
              backgroundColors={['#3e3e3e', '#df3434']}
              textColors={['#ffffff']}
            />
          ) : (
            <div className="flex h-[300px] w-[300px] items-center justify-center rounded-full bg-gray-200 text-gray-500 md:h-[400px] md:w-[400px]">
              메뉴를 추가해주세요!
            </div>
          )}
          <button
            onClick={handleSpinClick}
            className="mt-8 rounded-md bg-blue-500 px-6 py-3 text-lg font-bold text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-gray-400"
            disabled={mustSpin || wheelData.length === 0}
          >
            추첨
          </button>
        </div>

        {/* Panels */}
        <div className="col-span-1 flex flex-col gap-6">
          {/* CRUD Panel */}
          <div className="w-full rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800">
            <h2 className="mb-4 text-2xl font-bold">메뉴 관리</h2>

            <div className="mb-4 flex gap-2">
              <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="새 메뉴 이름"
                className="flex-grow rounded border px-3 py-2 disabled:cursor-not-allowed disabled:bg-gray-200 dark:border-neutral-600 dark:bg-neutral-700 dark:disabled:bg-neutral-800"
                disabled={mustSpin}
              />
              <button
                onClick={handleAddItem}
                className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600 disabled:cursor-not-allowed disabled:bg-gray-400"
                disabled={mustSpin}
              >
                추가
              </button>
            </div>

            <div className="mb-4 flex justify-end gap-2">
              <button
                onClick={handleReset}
                className="rounded bg-gray-500 px-4 py-2 text-sm font-bold text-white hover:bg-gray-600 disabled:cursor-not-allowed disabled:bg-gray-400"
                disabled={mustSpin}
              >
                초기화
              </button>
              <button
                onClick={handleDeleteAll}
                className="rounded bg-red-500 px-4 py-2 text-sm font-bold text-white hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-gray-400"
                disabled={mustSpin}
              >
                전체삭제
              </button>
            </div>

            <ul className="max-h-60 space-y-2 overflow-y-auto">
              {wheelData.map((item, index) => (
                <li key={index} className="flex items-center justify-between rounded bg-gray-100 p-2 dark:bg-neutral-700">
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      className="flex-grow rounded border px-2 py-1 dark:border-neutral-600 dark:bg-neutral-600"
                      disabled={mustSpin}
                    />
                  ) : (
                    <span className="flex-grow">{item.option}</span>
                  )}
                  <div className="flex gap-2">
                    {editingIndex === index ? (
                      <button
                        onClick={() => handleSaveItem(index)}
                        className="rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-gray-400"
                        disabled={mustSpin}
                      >
                        저장
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEditItem(index)}
                        className="rounded bg-yellow-500 px-3 py-1 text-sm text-white hover:bg-yellow-600 disabled:cursor-not-allowed disabled:bg-gray-400"
                        disabled={mustSpin}
                      >
                        수정
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteItem(index)}
                      className="rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-gray-400"
                      disabled={mustSpin}
                    >
                      삭제
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Results Panel */}
          <div className="w-full rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold">추첨 결과</h2>
              <button
                onClick={handleClearResults}
                className="rounded bg-gray-500 px-3 py-1 text-sm font-bold text-white hover:bg-gray-600 disabled:cursor-not-allowed disabled:bg-gray-400"
                disabled={results.length === 0}
              >
                초기화
              </button>
            </div>
            <ul className="max-h-60 space-y-2 overflow-y-auto">
              {results.map((result, index) => (
                <li key={index} className="rounded bg-gray-100 p-2 dark:bg-neutral-700">
                  {index + 1}. {result}
                </li>
              ))}
              {results.length === 0 && <li className="text-gray-500">추첨 결과가 없습니다.</li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GamePage
