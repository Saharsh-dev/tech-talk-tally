
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-brand-purple text-white p-2 rounded-md font-bold">TT</div>
          <h1 className="text-2xl font-bold">Tech Talk Tally</h1>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/submit">
            <Button className="flex items-center gap-2">
              <PlusCircle size={18} />
              Add Event
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
