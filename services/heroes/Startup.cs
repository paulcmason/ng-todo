﻿using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Swashbuckle.AspNetCore.Swagger;
using heroes.Models;

namespace heroes
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc()
                    .SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "My API", Version = "v1" });
            });
            var connection = "Data Source=db;Initial Catalog=Heroes;Integrated Security=False;User Id=hero_service;Password=Not_As_Secret_Password;MultipleActiveResultSets=True";
            services.AddDbContext<HeroContext>
                (options => options.UseSqlServer(connection));
            
            services.AddCors(options =>
            {
                options.AddPolicy("AllowSpecificOrigin",
                    builder => builder
                        .WithOrigins("http://localhost:4200")
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                );
            });
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseCors("AllowSpecificOrigin");
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });
            app.UseMvc();
        }
    }
}