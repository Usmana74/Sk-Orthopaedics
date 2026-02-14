import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface BookingModalProps {
  children: React.ReactNode;
}

const BookingModal = ({ children }: BookingModalProps) => {
  const [problem, setProblem] = useState("");
  const [date, setDate] = useState<Date>();
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    const dateStr = date ? format(date, "PPP") : "Not specified";
    const message = encodeURIComponent(
      `Hello Dr. Shoaib, I'd like to book an appointment. Problem: ${problem || "Not specified"}. Date: ${dateStr}.`
    );
    window.open(`https://wa.me/923002278796?text=${message}`, "_blank");
    setOpen(false);
    setProblem("");
    setDate(undefined);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">Book an Appointment</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-2">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              What is your primary problem?
            </label>
            <textarea
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              placeholder="Describe your condition or symptoms..."
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm min-h-[80px] focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              Preferred Visit Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(d) => d < new Date()}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>
          <Button
            onClick={handleSubmit}
            className="w-full cta-gradient text-primary-foreground font-semibold"
            disabled={!problem.trim()}
          >
            Confirm Booking via WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
