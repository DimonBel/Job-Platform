package com.project.JobPlatform.repository;

import com.project.JobPlatform.model.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificationRepository extends JpaRepository<Notification, Long> {
}
