package com.municipal.dbmodels;

import org.springframework.data.annotation.Id;

public class Issue {

    @Id
    public String id;

    // "attachment_refs",
    // "author_ref",
    // "municipal_area_ref",
    // "topic_refs",
    
    public String title;
    public String description;

    
    public String creationDate;
    public String lastUpdateDate;
    public String state;

    public Issue() {}

    @Override
    public String toString() {
        return String.format("Customer[id=%s, title='%s', description='%s']", id, title, description);
    }
}
