/*
    Used for checking if all the environment variables
    exists or not. Takes inputs and creates the /env/.env

    Run make to properly start all the code
*/

#include <iostream>
#include <fstream>
#include <filesystem>
#include <string>
#include <limits>
#include <sstream>
#include <cctype>

bool isNumeric(const std::string& str) {
    if (str.empty()) {
        return false;
    }
    for (char const &c : str) {
        if (!std::isdigit(c)) {
            return false;
        }
    }
    return true;
}

void createAndPopulateEnvFile(const std::filesystem::path& envFilePath) {
    std::string portRobotInput;
    bool validInput = false;

    while (!validInput) {
        std::cout << "Enter the PORT_ROBOT value (numeric only): ";
        std::getline(std::cin, portRobotInput);

        if (isNumeric(portRobotInput)) {
            validInput = true;
        } else {
            std::cerr << "Invalid input. Please enter only numbers for the port.\n";
            std::cin.clear();
        }
    }

    std::ofstream envFile(envFilePath);
    if (!envFile.is_open()) {
        std::cerr << "Error: Could not create or open .env file at " << envFilePath << ".\n";
        return;
    }

    envFile << "PORT_ROBOT=" << portRobotInput << std::endl;
    std::cout << "The .env file has been created/updated successfully at " << envFilePath << std::endl;
}

int main() {
    try {
        std::filesystem::path currentPath = std::filesystem::current_path();
        std::filesystem::path projectRoot = currentPath.parent_path();

        std::filesystem::path envDir = projectRoot / "env";
        std::filesystem::path envFilePath = envDir / ".env";

        bool envDirExisted = true;

        if (!std::filesystem::exists(envDir)) {
            std::cout << "The 'env' directory doesn't exist in " << projectRoot << ". Creating it...\n";
            if (!std::filesystem::create_directory(envDir)) {
                 std::cerr << "Error: Failed to create 'env' directory at " << envDir << ".\n";
                 return 1;
            }
            envDirExisted = false;
            std::cout << "'env' directory created successfully.\n";
        } else {
            std::cout << "'env' directory already exists at " << envDir << ".\n";
        }

        if (!std::filesystem::exists(envFilePath)) {
            std::cout << "The '.env' file does not exist in " << envDir << ". Creating and populating...\n";
            createAndPopulateEnvFile(envFilePath);
        } else {
            std::cout << "The '.env' file already exists at " << envFilePath << ". No action taken.\n";
        }

    } catch (const std::filesystem::filesystem_error& fs_err) {
        std::cerr << "Filesystem error: " << fs_err.what() << "\n"
                  << "Path1: " << fs_err.path1() << "\n"
                  << "Path2: " << fs_err.path2() << std::endl;
        return 1;
    } catch (const std::exception& e) {
        std::cerr << "An unexpected error occurred: " << e.what() << std::endl;
        return 1;
    }

    return 0;
}