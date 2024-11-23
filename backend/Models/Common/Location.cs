using MongoDB.Bson.Serialization.Attributes;

namespace JobBoardDotnetBackend.Models.Common
{
    public class Location
    {
        [BsonElement("street_address")]
        public string? StreetAddress { get; set; } = null!;
        [BsonElement("street_address_two")]
        public string? StreetAddressTwo { get; set; } = null!;

        [BsonElement("city")]
        public string? City { get; set; } = null;
        [BsonElement("postal_code")]
        public string? PostalCode { get; set; } = null!;
        [BsonElement("state")]
        public required string State { get; set; }
        [BsonElement("country")]
        public required string Country { get; set; }
        [BsonElement("location_type")]
        public string? LocationType { get; set; } = null!;
    }
}
