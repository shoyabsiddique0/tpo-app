#!/bin/bash

# Specify the folder path
folder_path="app"

# Output file for writing names and contents
output_file="output.txt"

# Use find to get a list of all HTML, TypeScript, and CSS files in the specified folder and its subdirectories
find "$folder_path" \( -iname "*.html" -o -iname "*.ts" -o -iname "*.scss" \) -type f -print0 | while IFS= read -r -d '' file; do
    # Write filename to output file
    echo "File: $file" >> "$output_file"

    # Write file contents to output file
    cat "$file" >> "$output_file"

    # Add a separator between files for better readability
    echo -e "\n------------------------\n" >> "$output_file"
done

echo "Process completed. Check '$output_file' for results."