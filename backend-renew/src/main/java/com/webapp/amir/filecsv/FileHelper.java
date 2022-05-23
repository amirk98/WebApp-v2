package com.webapp.amir.filecsv;

import org.apache.commons.csv.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class FileHelper {

    public static String TYPE = "text/csv";
    static String[] HEADERS = { "id", "uuid", "type", "unix", "temp" };
    public static boolean hasCSVFormat(MultipartFile file) {

        if (!TYPE.equals(file.getContentType())) {
            return false;
        }
        return true;
    }

    public static List<File> csvToFiles(InputStream is) {
        try (BufferedReader fileReader = new BufferedReader(new InputStreamReader(is, "UTF-8"));
             CSVParser csvParser = new CSVParser(fileReader,
                     CSVFormat.DEFAULT.withFirstRecordAsHeader().withIgnoreHeaderCase().withTrim());)
        {
            List<File> files = new ArrayList<File>();

            Iterable<CSVRecord> csvRecords = csvParser.getRecords();

            for (CSVRecord csvRecord : csvRecords) {
                File file = new File(
                        Long.parseLong(csvRecord.get("id")),
                        csvRecord.get("uuid"),
                        csvRecord.get("type"),
                        Double.parseDouble(csvRecord.get("unix")),
                        Double.parseDouble(csvRecord.get("temp"))
                );
                files.add(file);
            }
            return files;

        } catch (Exception e) {
            throw new RuntimeException("Failed to parse CSV file: " + e.getMessage());
        }
    }

    public static ByteArrayInputStream filesToCSV(List<File> files) {
        final CSVFormat format = CSVFormat.DEFAULT.withQuoteMode(QuoteMode.MINIMAL);

        try (ByteArrayOutputStream out = new ByteArrayOutputStream();
             CSVPrinter csvPrinter = new CSVPrinter(new PrintWriter(out), format);) {
            for (File file : files) {
                List<String> data = Arrays.asList(
                        String.valueOf(file.getId()),
                        file.getUuid(),
                        String.valueOf(file.getUnix()),
                        String.valueOf(file.getTemp())
                );

                csvPrinter.printRecord(data);
            }

            csvPrinter.flush();
            return new ByteArrayInputStream(out.toByteArray());
        } catch (IOException e) {
            throw new RuntimeException("fail to import data to CSV file: " + e.getMessage());
        }
    }
}
