using Kdtp.Domain;
using Kdtp.Persistance;
using Kdtp.Services;

const string AllowSpecifiOrigin = "AllowSpecificOrigin";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: AllowSpecifiOrigin, policy =>
        policy.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod());
});

builder.Services.AddPersistance(builder.Configuration.GetConnectionString("KdtpDb"));
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.ConfigureDomain();
builder.Services.ConfigureServices();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseCors(AllowSpecifiOrigin);

app.UseAuthorization();

app.MapControllers();

app.Run();