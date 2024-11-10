import { ScrollView } from "react-native";
import { Schema } from "../amplify/data/resource";
import IncidentCard from "./IncidentCard";

type Incident = Schema['Incident']['type'];

interface IncidentsListProps {
    incidents: Incident[];
}

export default function IncidentsList({ incidents }: IncidentsListProps) {
    return (
        <ScrollView
            style={{
                width: "100%",
                flex: 1,
            }}
            contentContainerStyle={{
                paddingVertical: 20,
                rowGap: 20,
                alignItems: "center",
            }}
        >
            {incidents.map((incident) => (
                <IncidentCard
                    key={incident.id}
                    incident={incident}
                />
            ))}
        </ScrollView>
    );
}