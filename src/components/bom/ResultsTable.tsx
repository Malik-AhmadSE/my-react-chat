import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { BOMResult } from '@/types/bom';
import { FileDown, Package, ClipboardList } from 'lucide-react';
import { ROOF_TYPE_LABELS } from '@/data/products';

interface ResultsTableProps {
  result: BOMResult;
  onExportPDF: () => void;
}

export const ResultsTable = ({ result, onExportPDF }: ResultsTableProps) => {
  const hasItems = result.items.length > 0;

  return (
    <Card className="h-full border-primary/20">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <ClipboardList className="h-5 w-5 text-primary" />
          Bill of Materials (BOM)
        </CardTitle>
        {hasItems && (
          <Button onClick={onExportPDF} className="gap-2">
            <FileDown className="h-4 w-4" />
            Export PDF
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {hasItems ? (
          <>
            {/* Summary Section */}
            <div className="mb-6 grid grid-cols-2 gap-4 rounded-lg bg-muted/50 p-4 md:grid-cols-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">System Type</p>
                <p className="font-semibold text-sm">
                  {ROOF_TYPE_LABELS[result.config.roof.roofType]}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Total Panels</p>
                <p className="text-xl font-bold text-primary">{result.totalPanels}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Orientation</p>
                <p className="font-semibold">
                  {result.config.panel.orientation === 'landscape' ? 'Landscape' : 'Portrait'}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Items</p>
                <p className="text-xl font-bold">{result.items.length}</p>
              </div>
            </div>

            {/* BOM Table */}
            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Product Code</TableHead>
                    <TableHead className="font-semibold">Description</TableHead>
                    <TableHead className="text-center font-semibold">Needed</TableHead>
                    <TableHead className="text-center font-semibold">Packed</TableHead>
                    <TableHead className="text-center font-semibold">Quantity</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {result.items.map((item, index) => (
                    <TableRow key={index} className="hover:bg-muted/30">
                      <TableCell className="font-mono text-sm font-medium">
                        {item.productCode}
                      </TableCell>
                      <TableCell>{item.description}</TableCell>
                      <TableCell className="text-center">{item.required}</TableCell>
                      <TableCell className="text-center text-muted-foreground">
                        {item.packaged}
                      </TableCell>
                      <TableCell className="text-center font-semibold text-primary">
                        {item.toOrder}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Package className="mb-4 h-16 w-16 text-muted-foreground/50" />
            <h3 className="mb-2 text-lg font-semibold text-muted-foreground">
              No Materials Calculated
            </h3>
            <p className="max-w-sm text-sm text-muted-foreground">
              Fill in the configuration on the left to calculate the required materials.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
