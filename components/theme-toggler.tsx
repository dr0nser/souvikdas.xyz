"use client";
import {
    Button
} from "@headlessui/react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <Button onClick={toggleTheme} className="p-2">
      {theme === "dark" ? (
        <IconMoon className="w-6 h-6" />
      ) : (
        <IconSun className="w-6 h-6" />
      )}
    </Button>
  );
}
