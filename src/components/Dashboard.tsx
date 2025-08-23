import { useState } from "react"
import { TopNavigation } from "@/components/TopNavigation"
import { VerificationResults, VerificationResult } from "@/components/VerificationResults"
import { History } from "@/components/History"

// Mock data for demonstration
const mockHistory: VerificationResult[] = [
  {
    id: "1",
    claim: "The Earth is flat and space agencies are hiding this truth from the public.",
    status: "verified-false",
    confidence: 95,
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    summary: "This claim has been thoroughly debunked by overwhelming scientific evidence. The Earth is an oblate spheroid, as confirmed by satellite imagery, physics, and direct observation.",
    evidenceSources: [
      {
        id: "s1",
        title: "NASA Satellite Images Show Earth's Curvature",
        source: "NASA",
        url: "https://nasa.gov",
        credibility: 98,
        summary: "High-resolution satellite imagery clearly demonstrates Earth's spherical nature and curvature."
      },
      {
        id: "s2", 
        title: "Scientific Consensus on Earth's Shape",
        source: "Nature Science Journal",
        url: "https://nature.com",
        credibility: 96,
        summary: "Comprehensive review of geological, astronomical, and physical evidence supporting Earth's spherical shape."
      }
    ]
  },
  {
    id: "2",
    claim: "Climate change is primarily caused by human activities, particularly greenhouse gas emissions.",
    status: "verified-true",
    confidence: 97,
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    summary: "Scientific consensus strongly supports human activities as the primary driver of current climate change, with greenhouse gas emissions being the main contributor.",
    evidenceSources: [
      {
        id: "s3",
        title: "IPCC Climate Change Report 2023",
        source: "Intergovernmental Panel on Climate Change",
        url: "https://ipcc.ch",
        credibility: 99,
        summary: "Comprehensive assessment by thousands of climate scientists confirms human influence on climate system."
      }
    ]
  },
  {
    id: "3",
    claim: "A new study claims that drinking coffee daily can extend your lifespan by 10 years.",
    status: "unverified",
    confidence: 45,
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    summary: "While some studies suggest coffee may have health benefits, the specific claim of 10-year lifespan extension lacks sufficient peer-reviewed evidence and may be exaggerated.",
    evidenceSources: [
      {
        id: "s4",
        title: "Coffee and Longevity: A Meta-Analysis",
        source: "Journal of Nutrition",
        url: "https://example.com",
        credibility: 78,
        summary: "Meta-analysis shows moderate positive association between coffee consumption and longevity, but results vary."
      }
    ]
  }
]

export default function Dashboard() {
  const [currentResult, setCurrentResult] = useState<VerificationResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [history] = useState<VerificationResult[]>(mockHistory)

  // Mock verification function
  const handleSearch = async (query: string) => {
    setIsLoading(true)
    setCurrentResult(null)

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Mock result based on query
    const mockResult: VerificationResult = {
      id: Date.now().toString(),
      claim: query,
      status: Math.random() > 0.5 ? "verified-true" : "verified-false",
      confidence: Math.floor(Math.random() * 40) + 60, // 60-100%
      timestamp: new Date(),
      summary: "This is a mock analysis of your claim. In a real system, this would contain detailed analysis from multiple sources and fact-checking algorithms.",
      evidenceSources: [
        {
          id: "mock-1",
          title: "Relevant Source Article",
          source: "Example News Source",
          url: "https://example.com",
          credibility: Math.floor(Math.random() * 30) + 70,
          summary: "This is a mock evidence source that would normally contain relevant information about the claim."
        },
        {
          id: "mock-2",
          title: "Academic Research Paper",
          source: "Journal of Example Studies",
          url: "https://example.com",
          credibility: Math.floor(Math.random() * 20) + 80,
          summary: "Mock academic source with peer-reviewed research related to the topic."
        }
      ]
    }

    setCurrentResult(mockResult)
    setIsLoading(false)
  }

  const handleSelectHistoryResult = (result: VerificationResult) => {
    setCurrentResult(result)
  }

  return (
    <div className="min-h-screen bg-background">
      <TopNavigation onSearch={handleSearch} isSearching={isLoading} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content area */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight">
                Misinformation Verification Dashboard
              </h1>
              <p className="text-muted-foreground">
                Enter a claim above to verify its accuracy using our advanced fact-checking system.
              </p>
            </div>
            
            <VerificationResults result={currentResult} isLoading={isLoading} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <History 
              history={history} 
              onSelectResult={handleSelectHistoryResult}
              selectedResultId={currentResult?.id}
            />
          </div>
        </div>
      </main>
    </div>
  )
}