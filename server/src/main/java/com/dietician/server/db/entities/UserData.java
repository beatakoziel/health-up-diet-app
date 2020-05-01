package com.dietician.server.db.entities;

import com.dietician.server.db.enums.FreeTimeActivityLevel;
import com.dietician.server.db.enums.Gender;
import com.dietician.server.db.enums.Goal;
import com.dietician.server.db.enums.WorkActivityLevel;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Date date;

    @Column(nullable = false)
    private float weight;

    @Column(nullable = false)
    private float height;

    @Column(nullable = false)
    private byte age;

    @Column(nullable = false)
    private int calories;

    @Column(nullable = false)
    private int carbohydrates;

    @Column(nullable = false)
    private int proteins;

    @Column(nullable = false)
    private int fat;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Goal goal;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private WorkActivityLevel workActivityLevel;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private FreeTimeActivityLevel freeTimeActivityLevel;
}
