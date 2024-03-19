import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import { useState } from "react";

function Footer() {
  const [emailAdress, setEmailAdress] = useState("");

  return (
    <footer className="bg-amber-300 p-4 flex justify-center items-center gap-4">
      <label>Inscrivez vous à la newletter</label>
      <div className="flex align-center gap-1">
        <input
          value={emailAdress}
          onChange={(e) => setEmailAdress(e.target.value)}
          className="rounded-md px-2"
          type="email"
          placeholder="Adresse mail"
        ></input>
        <IconButton
          onClick={() => {
            const trimmedEmail = emailAdress.trim();
            if (!trimmedEmail) return;
            const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
            if (!isValidEmail) alert("Adresse mail invalide");
            else alert("Inscription validée");
          }}
        >
          <SendIcon fontSize="small" sx={{ color: "black" }} />
        </IconButton>
      </div>
    </footer>
  );
}

export default Footer;
