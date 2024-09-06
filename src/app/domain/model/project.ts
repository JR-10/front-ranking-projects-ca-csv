import { UUID } from "crypto"

export interface Project {
    id: number;
    projectId: UUID;
    name: string;
    rating: number;
    category: string;
}