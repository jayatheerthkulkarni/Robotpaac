#!/bin/bash
# Creates a database if doesn't exists and populates it with commands
TARGET_DIR="database_location"
TARGET_FILE="data.db"
FILE_PATH="$TARGET_DIR/$TARGET_FILE"

echo "Checking for directory: '$TARGET_DIR'..."

# Check if the directory does NOT exist using '-d' flag
if [ ! -d "$TARGET_DIR" ]; then
  echo "Directory '$TARGET_DIR' not found. Creating it now..."

  
  mkdir "$TARGET_DIR"

  
  if [ $? -eq 0 ]; then
    echo "Directory '$TARGET_DIR' created successfully."
    echo "Creating file '$FILE_PATH' inside '$TARGET_DIR'..."

    
    touch "$FILE_PATH"

    
    if [ $? -eq 0 ]; then
      echo "File '$FILE_PATH' created successfully."
    else
      echo "Error: Failed to create file '$FILE_PATH'."
      exit 1 
    fi
  else
    echo "Error: Failed to create directory '$TARGET_DIR'."
    exit 1 
  fi
else
  
  echo "Directory '$TARGET_DIR' already exists. No action taken."
fi

echo "Script finished."
exit 0