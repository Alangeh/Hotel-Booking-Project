'use client';

import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";


import { SafeReservations, SafeUser } from "../types";
import Heading from "../components/Heading";
import Container from "../components/Container";
import ListingCard from "../components/listings/ListingCard";
import { useRouter } from "next/navigation";

interface ReservationsClientProps {
    reservations: SafeReservations[];
    currentUser: SafeUser | null;
}

const ReservationsClient: React.FC<ReservationsClientProps> = ({
    reservations,
    currentUser
}) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState('');

    const onCancel = useCallback((id: string) => {
        setDeletingId(id);
        axios.delete(`/api/reservations/${id}`)
        .then(() => {
            toast.success("Reservation cancelled");
            router.refresh();
        })
        .catch(() => {
            toast.error("Something went wrong");
        })
        .finally(() => {
            setDeletingId('');
        })
    },[router])

    return (
        <Container>
            <Heading 
                title="Reservations"
                subtitle="Bookings on your properties"
            />
        </Container>
    );
}
 
export default ReservationsClient;