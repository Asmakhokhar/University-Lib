
import { Card, CardContent } from "./ui/card";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

type BookingCardProps = {
  title: string;
  description: string;
  date: string;
  time: string;
  location?: string;
  seats?: number;
  isFull?: boolean;
};

export default function BookingCard({
  title,
  description,
  date,
  time,
  location,
  seats,
  isFull = false,
}: BookingCardProps) {
  return (
    <Card className={isFull ? "bg-gray-200 opacity-80" : ""}>
      <CardContent>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>

        <div className="flex items-center gap-2 text-sm">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Clock className="w-4 h-4" />
          <span>{time}</span>
        </div>

        {location && (
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        )}

        {isFull ? (
          <div className="flex items-center gap-2 text-red-600 text-sm font-medium">
            <Users className="w-4 h-4" />
            <span>Full</span>
          </div>
        ) : (
          seats !== undefined && (
            <div className="flex items-center gap-2 text-sm">
              <Users className="w-4 h-4" />
              <span>Seats: {seats}</span>
            </div>
          )
        )}

        <button
          disabled={isFull}
          className={`w-full mt-3 py-2 rounded-xl text-white ${
            isFull
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700"
          }`}
        >
          {isFull ? "Not Available" : "Book Now"}
        </button>
      </CardContent>
    </Card>
  );
}