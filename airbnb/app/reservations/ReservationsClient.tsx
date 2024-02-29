'use client';

import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";


import { SafeReservations, SafeUser } from "../types";
import Heading from "../components/Heading";
import Container from "../components/Container";
import ListingCard from "../components/listings/ListingCard";

interface ReservationsClientProps {
    reservations: SafeReservations | null;
    currentUser: SafeUser | null;
}

const ReservationsClient: React.FC<ReservationsClientProps> = ({
    reservations,
    currentUser
}) => {
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