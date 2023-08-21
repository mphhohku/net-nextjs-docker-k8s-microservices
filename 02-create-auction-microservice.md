# Create the Auction Microservice

1. In the terminal, type `dotnet new sln` to create a new solution file.
2. In the terminal, type `dotnet new webapi -o src/AuctionService` to create a new web API project.
3. In the terminal, type `dotnet sln add src/AuctionService` to add the project to the solution.
4. In AuctionSercice.csproj, disable Nullable. Also, remove the item groups.

# Postman tests

- The section requests can be run all at once.
- To reinitialize the database, enter `dotnet ef database drop -f` in the terminal.
