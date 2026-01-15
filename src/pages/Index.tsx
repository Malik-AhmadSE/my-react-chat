import { useState } from 'react';
import { ConfigurationPanel } from '@/components/bom/ConfigurationPanel';
import { ResultsTable } from '@/components/bom/ResultsTable';
import { useBOMCalculator } from '@/hooks/useBOMCalculator';
import { PanelConfig, RoofConfig } from '@/types/bom';
import { ROOF_TYPES, PROFILE_COLORS, HOOK_TYPES } from '@/data/products';
import { exportBOMToPDF } from '@/utils/pdfExport';
import { Sun } from 'lucide-react';

const Index = () => {
  const [panelConfig, setPanelConfig] = useState<PanelConfig>({
    height: 1722,
    width: 1134,
    thickness: 35,
    orientation: 'landscape',
    rows: 2,
    columns: 4,
  });

  const [roofConfig, setRoofConfig] = useState<RoofConfig>({
    roofType: ROOF_TYPES.SLANTED_ROOF,
    hookType: HOOK_TYPES.NORMAL,
    angle: 15,
    profileColor: PROFILE_COLORS.ALU,
    clampColor: PROFILE_COLORS.ALU,
  });

  const bomResult = useBOMCalculator(panelConfig, roofConfig);

  const handleExportPDF = () => {
    exportBOMToPDF(bomResult);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Sun className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">AXXIOM</h1>
                <p className="text-xs text-muted-foreground">
                  Solar Mounting Systems
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">BOM Calculator</p>
              <p className="text-xs text-muted-foreground">
                Materialenlijst Generator
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight">
            Configureer uw zonnepaneel installatie
          </h2>
          <p className="mt-1 text-muted-foreground">
            Selecteer het daktype, vul de paneelgegevens in en ontvang direct uw materialenlijst.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[400px_1fr]">
          {/* Left Panel - Configuration */}
          <aside className="space-y-6">
            <ConfigurationPanel
              panelConfig={panelConfig}
              roofConfig={roofConfig}
              onPanelConfigChange={setPanelConfig}
              onRoofConfigChange={setRoofConfig}
            />
          </aside>

          {/* Right Panel - Results */}
          <section>
            <ResultsTable result={bomResult} onExportPDF={handleExportPDF} />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Axxiom Solar Mounting Systems. Alle rechten voorbehouden.
            </p>
            <p className="text-sm text-muted-foreground">
              Versie 1.0 - BOM Calculator
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
