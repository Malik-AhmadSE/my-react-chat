import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PanelConfig, RoofConfig } from '@/types/bom';
import {
  ROOF_TYPES,
  ROOF_TYPE_LABELS,
  HOOK_TYPES,
  HOOK_TYPE_LABELS,
  PROFILE_COLORS,
  PROFILE_COLOR_LABELS,
  ANGLE_OPTIONS,
  RoofType,
  HookType,
  ProfileColor,
} from '@/data/products';
import { Settings2, Sun, Ruler, Grid3X3 } from 'lucide-react';

interface ConfigurationPanelProps {
  panelConfig: PanelConfig;
  roofConfig: RoofConfig;
  onPanelConfigChange: (config: PanelConfig) => void;
  onRoofConfigChange: (config: RoofConfig) => void;
}

export const ConfigurationPanel = ({
  panelConfig,
  roofConfig,
  onPanelConfigChange,
  onRoofConfigChange,
}: ConfigurationPanelProps) => {
  const showHookType = roofConfig.roofType === ROOF_TYPES.SLANTED_ROOF;
  const showAngle = (
    roofConfig.roofType === ROOF_TYPES.ALLFIELD_LANDSCAPE ||
    roofConfig.roofType === ROOF_TYPES.ALLFIELD_PORTRAIT ||
    roofConfig.roofType === ROOF_TYPES.SOLARSPEED_EW ||
    roofConfig.roofType === ROOF_TYPES.SOLARSPEED_SOUTH
  );

  return (
    <div className="space-y-6">
      {/* Roof Type Selection */}
      <Card className="border-primary/20">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Settings2 className="h-5 w-5 text-primary" />
            Daktype Selectie
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="roofType">Type Montagesysteem</Label>
            <Select
              value={roofConfig.roofType}
              onValueChange={(value: RoofType) =>
                onRoofConfigChange({ ...roofConfig, roofType: value })
              }
            >
              <SelectTrigger id="roofType" className="w-full">
                <SelectValue placeholder="Selecteer daktype" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(ROOF_TYPE_LABELS).map(([key, label]) => (
                  <SelectItem key={key} value={key}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {showHookType && (
            <div className="space-y-2">
              <Label htmlFor="hookType">Dakhaak Type</Label>
              <Select
                value={roofConfig.hookType || HOOK_TYPES.NORMAL}
                onValueChange={(value: HookType) =>
                  onRoofConfigChange({ ...roofConfig, hookType: value })
                }
              >
                <SelectTrigger id="hookType" className="w-full">
                  <SelectValue placeholder="Selecteer dakhaak type" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(HOOK_TYPE_LABELS).map(([key, label]) => (
                    <SelectItem key={key} value={key}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {showAngle && (
            <div className="space-y-2">
              <Label htmlFor="angle">Hellingshoek</Label>
              <Select
                value={roofConfig.angle.toString()}
                onValueChange={(value) =>
                  onRoofConfigChange({ ...roofConfig, angle: parseFloat(value) })
                }
              >
                <SelectTrigger id="angle" className="w-full">
                  <SelectValue placeholder="Selecteer hoek" />
                </SelectTrigger>
                <SelectContent>
                  {ANGLE_OPTIONS.map((angle) => (
                    <SelectItem key={angle} value={angle.toString()}>
                      {angle}°
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="profileColor">Profiel Kleur</Label>
              <Select
                value={roofConfig.profileColor}
                onValueChange={(value: ProfileColor) =>
                  onRoofConfigChange({ ...roofConfig, profileColor: value })
                }
              >
                <SelectTrigger id="profileColor" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(PROFILE_COLOR_LABELS).map(([key, label]) => (
                    <SelectItem key={key} value={key}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="clampColor">Klem Kleur</Label>
              <Select
                value={roofConfig.clampColor}
                onValueChange={(value: ProfileColor) =>
                  onRoofConfigChange({ ...roofConfig, clampColor: value })
                }
              >
                <SelectTrigger id="clampColor" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(PROFILE_COLOR_LABELS).map(([key, label]) => (
                    <SelectItem key={key} value={key}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Panel Configuration */}
      <Card className="border-primary/20">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Sun className="h-5 w-5 text-primary" />
            Paneel Configuratie
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="orientation">Oriëntatie</Label>
            <Select
              value={panelConfig.orientation}
              onValueChange={(value: 'landscape' | 'portrait') =>
                onPanelConfigChange({ ...panelConfig, orientation: value })
              }
            >
              <SelectTrigger id="orientation" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="landscape">Liggend (Landscape)</SelectItem>
                <SelectItem value="portrait">Staand (Portrait)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Panel Dimensions */}
      <Card className="border-primary/20">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Ruler className="h-5 w-5 text-primary" />
            Paneel Afmetingen
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="height">Hoogte (mm)</Label>
              <Input
                id="height"
                type="number"
                value={panelConfig.height || ''}
                onChange={(e) =>
                  onPanelConfigChange({
                    ...panelConfig,
                    height: parseInt(e.target.value) || 0,
                  })
                }
                placeholder="1722"
                min={0}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="width">Breedte (mm)</Label>
              <Input
                id="width"
                type="number"
                value={panelConfig.width || ''}
                onChange={(e) =>
                  onPanelConfigChange({
                    ...panelConfig,
                    width: parseInt(e.target.value) || 0,
                  })
                }
                placeholder="1134"
                min={0}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="thickness">Dikte (mm)</Label>
              <Input
                id="thickness"
                type="number"
                value={panelConfig.thickness || ''}
                onChange={(e) =>
                  onPanelConfigChange({
                    ...panelConfig,
                    thickness: parseInt(e.target.value) || 0,
                  })
                }
                placeholder="35"
                min={0}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Panel Layout */}
      <Card className="border-primary/20">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Grid3X3 className="h-5 w-5 text-primary" />
            Paneel Layout
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="rows">Aantal Rijen</Label>
              <Input
                id="rows"
                type="number"
                value={panelConfig.rows || ''}
                onChange={(e) =>
                  onPanelConfigChange({
                    ...panelConfig,
                    rows: parseInt(e.target.value) || 0,
                  })
                }
                placeholder="2"
                min={1}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="columns">Aantal Kolommen</Label>
              <Input
                id="columns"
                type="number"
                value={panelConfig.columns || ''}
                onChange={(e) =>
                  onPanelConfigChange({
                    ...panelConfig,
                    columns: parseInt(e.target.value) || 0,
                  })
                }
                placeholder="4"
                min={1}
              />
            </div>
          </div>

          <div className="rounded-lg bg-muted/50 p-4 text-center">
            <p className="text-sm text-muted-foreground">Totaal aantal panelen</p>
            <p className="text-3xl font-bold text-primary">
              {panelConfig.rows * panelConfig.columns}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
