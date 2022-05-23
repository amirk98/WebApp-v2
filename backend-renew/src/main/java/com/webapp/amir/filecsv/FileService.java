package com.webapp.amir.filecsv;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;

@Service
public class FileService {

    @Autowired
    FileRepository fileRepository;

    public void save(MultipartFile file) {
        try {
            List<File> files = FileHelper.csvToFiles(file.getInputStream());
            fileRepository.saveAll(files);
        } catch (IOException e) {
            throw new RuntimeException("Failed to store csv data: " + e.getMessage());
        }
    }

    public ByteArrayInputStream load() {
        List<File> files = fileRepository.findAll();

        ByteArrayInputStream in = FileHelper.filesToCSV(files);
        return in;
    }

    public List<File> getAllFiles() {
        return fileRepository.findAll();
    }
}
