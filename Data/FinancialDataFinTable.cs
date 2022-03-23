//namespace TeamCollaborationWebinar.Data.FinancialData; // Razor won't recognize third level namespace
namespace TeamCollaborationWebinar.FinancialData;

public class FinTableType
{
    public double Id { get; set; }
    public string Category { get; set; }
    public string Type { get; set; }
    public string Contract { get; set; }
    public string Settlement { get; set; }
    public string Country { get; set; }
    public string Region { get; set; }
    public DateTime LastUpdate { get; set; }
    public double OpenPrice { get; set; }
    public double Price { get; set; }
    public double Change { get; set; }
    public double ChangeP { get; set; }
    public double Buy { get; set; }
    public double Sell { get; set; }
    public double Spread { get; set; }
    public double Volume { get; set; }
    public double HighD { get; set; }
    public double LowD { get; set; }
    public double HighY { get; set; }
    public double LowY { get; set; }
    public double StartY { get; set; }
    public string IndGrou { get; set; }
    public string IndSect { get; set; }
    public string IndSubg { get; set; }
    public string SecType { get; set; }
    public string IssuerN { get; set; }
    public string Moodys { get; set; }
    public string Fitch { get; set; }
    public string Dbrs { get; set; }
    public string CollatT { get; set; }
    public string Curncy { get; set; }
    public string Security { get; set; }
    public string Sector { get; set; }
    public string Cusip { get; set; }
    public string Ticker { get; set; }
    public string Cpn { get; set; }
    public DateTime Maturity { get; set; }
    public double KrD_3YR { get; set; }
    public double ZV_SPREAD { get; set; }
    public double KRD_5YR { get; set; }
    public double KRD_1YR { get; set; }
    public string IndGrou2 { get; set; }
    public string IndSect3 { get; set; }
    public string IndSubg4 { get; set; }
    public string SecType5 { get; set; }
    public string IssuerN6 { get; set; }
    public string Moodys7 { get; set; }
    public string Fitch8 { get; set; }
    public string Dbrs9 { get; set; }
    public string CollatT10 { get; set; }
}
