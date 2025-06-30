package com.project.JobPlatform;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class JobPlatformApplication {

	public static void main(String[] args) {
		SpringApplication.run(JobPlatformApplication.class, args);
	}

}
