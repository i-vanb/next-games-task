'use client';

import { useEffect } from 'react';

export default function Error({error, reset}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    const goToHomePage = () => {
        window.location.href = '/';
    }

    return (
        <div>
            <h2>Something went wrong!</h2>
            <div className="button__group">
                <button onClick={() => reset()}>Try again</button>
                <button onClick={goToHomePage}>Back to Home Page</button>
            </div>
        </div>
    )
}