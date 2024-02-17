'use client';

import { SafeReservations, SafeUser } from "../types";

interface TripsClientProps {
    reservations: SafeReservations[];
    currentUser?: SafeUser | null;
}

const TripsClient: React.FC<TripsClientProps> = ({
    reservations,
    currentUser
}) => {
    return (
        <div></div>
    )
}

export default TripsClient;