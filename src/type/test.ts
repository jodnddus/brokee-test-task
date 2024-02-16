interface TestType {
    brokee_id: number;
    category: "AWS" | "Azure" | "GCP" | "Ingress" | "Linux";
    description_short: string;
    difficulty: "easy" | "medium" | "hard";
    featured_image: string;
    name: string;
    requires_payment: boolean;
    roles: string;
    status: "ready" | "upcoming"
    tech_stack: string;
    type: "console" | "kubernetes" | "docker";
}

export type { TestType }