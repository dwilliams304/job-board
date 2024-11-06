var builder = WebApplication.CreateBuilder(args);

var url = Environment.GetEnvironmentVariable("SUPABASE_URL");
var api = Environment.GetEnvironmentVariable("SUPABASE_API");

var supabaseOptions = new Supabase.SupabaseOptions
{
    AutoRefreshToken = true,
    AutoConnectRealtime = true
};

// Add services to the container.

builder.Services.AddScoped<Supabase.Client>(_ =>
    new Supabase.Client(url, api, supabaseOptions));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
