import { Route, Routes } from "react-router-dom";
import { Event } from "../pages/Event";
import { Subscribes } from "../pages/Subscribes";
export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Subscribes />} />
            <Route path="/event" element={<Event />} />
            <Route path="/event/lesson/:slug" element={<Event />} />
        </Routes>
    )
}