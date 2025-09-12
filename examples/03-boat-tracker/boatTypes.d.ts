export interface Coord {
    lat: number;
    lng: number;
}

export interface Track {
    coordinates: Coord[];
    timestamps: number[];
}

export interface ShipResult {
    id: string;
    name: string;
    position: Coord;
    track: Track;
    heading: number;
    speed: number;
}

export interface DisplayedShip extends ShipResult {
    color: string;
}

export interface BoatResult {
    heading: number;
    rank: number;
    sail: string;
    timestamp: number;
    lat_dec: number;
    lon_dec: number;
    lastreport_heading: number;
    lastreport_speed: number;
    lastreport_vmg: number;
    lastreport_distance: number;
    total_time: string;
    track: [number, number][];
}

export interface DisplayedBoat extends BoatResult {
    // We attach color later
    color: string;
}

export interface ExtendedMarker {
    sail: string;
    marker: L.Marker;
    latestPosition: [number, number];
}
