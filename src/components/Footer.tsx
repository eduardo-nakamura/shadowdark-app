import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-black text-white p-6">
            <div className="max-w-7xl mx-auto text-center">
                {/* Your Code/Design Copyright */}
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Eduardo Nakamura. All rights reserved.
                </p>

                {/* OGL/Trade Dress Compliance Notice */}
                <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                    This tool is an independent creation and is not affiliated with or endorsed by Goodman Games.
                    It uses Open Game Content under the Open Game License (OGL).
                    All Shadowdark RPG trade dress and copyrighted material is the property of Goodman Games.                    
                </p>

            </div>
        </footer>
    )
}
