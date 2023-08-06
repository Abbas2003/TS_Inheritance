// Abstraction
abstract class Country{
    public name: string;
    public language: string;
    public population: number;
    public populationGrowthRate: number;

    constructor(name: string, language: string, population: number, populationGrowthRate: number){
        this.name = name
        this.language = language
        this.population = population
        this.populationGrowthRate = populationGrowthRate
    }
    
    public abstract populationGrowth(): number;
}

// All meaning full info is in this class
class OICCountry extends Country{
    constructor(name: string, language: string, population: number, populationGrowthRate: number){
        super(name, language, population, populationGrowthRate)
    }
    public populationGrowth(): number {
        this.population = this.population * this.populationGrowthRate
        return this.population
    }
}

// Now using the OICCountry class
let pakistan = new OICCountry('Pakistan','Urdu',50000000,2.7)
console.info(pakistan)