import { Clock } from "lucide-react"

export default function BusinessHours() {
  const hours = [
    { day: "Lundi", hours: "9:00 AM - 6:00 PM", isOpen: true },
    { day: "Mardi", hours: "9:00 AM - 6:00 PM", isOpen: true },
    { day: "Mercredi", hours: "9:00 AM - 6:00 PM", isOpen: true },
    { day: "Jeudi", hours: "9:00 AM - 6:00 PM", isOpen: true },
    { day: "Vendredi", hours: "9:00 AM - 6:00 PM", isOpen: true },
    { day: "Samedi", hours: "9:00 AM - 5:00 PM", isOpen: true },
    { day: "Dimanche", hours: "FERMÉ", isOpen: false },
  ]

  // Get current day to highlight it
  const today = new Date().getDay() // 0 is Sunday, 1 is Monday, etc.
  const daysMap = { 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 0: 6 } // Map JS day to our array index
  const currentDayIndex = daysMap[today]

  return (
    <div className="bg-white rounded-xl overflow-hidden">
      {/* Current Day Status */}
      <div className="bg-primary/5 p-3 md:p-4 border-b border-gray-100">
        <div className="flex items-center">
          <Clock className="h-4 w-4 md:h-5 md:w-5 text-primary mr-2" />
          <div>
            <p className="font-medium text-gray-900 text-sm md:text-base">
              {hours[currentDayIndex].isOpen ? (
                <>
                  <span className="text-green-600">Ouvert aujourd'hui</span> • {hours[currentDayIndex].hours}
                </>
              ) : (
                <span className="text-red-500">Fermé aujourd'hui</span>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Weekly Schedule */}
      <div className="grid grid-cols-1 divide-y divide-gray-100">
        {hours.map((item, index) => (
          <div
            key={item.day}
            className={`flex justify-between items-center p-2 md:p-3 ${
              index === currentDayIndex ? "bg-primary/5" : "hover:bg-gray-50"
            } transition-colors`}
          >
            <span
              className={`${
                index === currentDayIndex ? "font-medium text-primary" : "text-gray-700"
              } flex items-center text-sm md:text-base`}
            >
              {index === currentDayIndex && (
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 animate-pulse"></span>
              )}
              {item.day}
            </span>
            <span
              className={`${
                item.isOpen ? "text-gray-700" : "text-red-500 font-medium"
              } text-right whitespace-nowrap text-sm md:text-base`}
            >
              {item.hours}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
