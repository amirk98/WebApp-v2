package com.webapp.amir.filecsv;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "files")
public class File {

    @Id
    @Column(name = "id")
    private long id;

    @Column(name = "uuid")
    private String uuid;

    @Column(name = "type")
    private String type;

    @Column(name = "unix")
    private double unix;

    @Column(name = "temp")
    private double temp;

    public File() {
    }

    public File(long id, String uuid, String type, double unix, double temp) {
        this.id = id;
        this.uuid = uuid;
        this.type = type;
        this.unix = unix;
        this.temp = temp;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getUnix() {
        return unix;
    }

    public void setUnix(double unix) {
        this.unix = unix;
    }

    public double getTemp() {
        return temp;
    }

    public void setTemp(double temp) {
        this.temp = temp;
    }
}
