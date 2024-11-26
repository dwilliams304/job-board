using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using JobBoardDotnetBackend.Models.Common;

namespace JobBoardDotnetBackend.Models
{
    public class JobApplications
    {
        [BsonId, BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("job_id"), BsonRepresentation(BsonType.ObjectId)]
        public string? JobId { get; set; }

        [BsonElement("applications")]
        public List<Application>? Applications { get; set; }

    }

    public class Application
    {
        [BsonElement("applicant_id"), BsonRepresentation(BsonType.ObjectId)]
        public string? ApplicantId { get; set; }

        [BsonElement("resume")]
        public string? Resume {  get; set; }

        [BsonElement("application_date")]
        public DateTime ApplicationDate { get; set; }

        [BsonElement("status")]
        public string? Status { get; set; }

        //[BsonElement("answers")]
        //public List<ApplicationQuestion>? Answers { get; set; }
    }

}
