package com.dietician.server.db.entities;

import com.dietician.server.db.enums.UserRole;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "health_up_user")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    private String password;

    @Column(nullable = false)
    private boolean blocked;

    @Column(unique = true)
    private String facebookUserId;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private UserRole role;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Meal> meals;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private UserGoalData userGoal;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return new ArrayList<>();
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
