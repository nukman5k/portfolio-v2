'use client';

// import { Button } from "./ui/button";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    //useEffect
    useEffect(() => {
        setMounted(true);
    }, []);

    //suggestion
    useEffect(() => {
        // Update the theme when the theme state changes
        document.body.classList.toggle("dark", theme === "dark");
    }, [theme]);

    if (!mounted) {
        return null;
    }

    const handleClick = () => {
        setTheme(theme === "light" ? "dark" : "light");
        console.log('Current theme:', theme);

    };

    return (
        <div>
            <Button onClick={handleClick} aria-label="Toggle theme">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
        </div>
    )
}

export default ThemeToggler;