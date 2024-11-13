using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;


namespace JobBoardDotnetBackend.Models 
{
    public class JobPost
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("company")]
        [BsonRepresentation(BsonType.ObjectId)]
        public string CompanyID { get; set; } = null!;

        [BsonElement("date_posted")]
        public DateTime? DatePosted { get; set; }

        [BsonElement("title")]
        public string Title { get; set; } = null!;

        [BsonElement("short_description")]
        public string ShortDescription { get; set; } = null!;

        [BsonElement("salary")]
        public required int? Salary { get; set; }

        [BsonElement("term")]
        public string Term { get; set; } = null!;

        [BsonElement("location")]
        public string Location { get; set; } = null!;

        [BsonElement("location_type")]
        public string LocationType { get; set; } = null!;

        [BsonElement("experience")]
        public string Experience { get; set; } = null!;
    }
}