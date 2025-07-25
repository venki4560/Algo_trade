import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Plus, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CreateStrategy = () => {
  const [selectedDays, setSelectedDays] = useState([
    "All Days", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
  ]);
  const [orderType, setOrderType] = useState("MIS");
  const [strategyFeature, setStrategyFeature] = useState("Intraday");

  const toggleDay = (day: string) => {
    if (day === "All Days") {
      if (selectedDays.includes("All Days")) {
        setSelectedDays([]);
      } else {
        setSelectedDays(["All Days", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]);
      }
    } else {
      setSelectedDays(prev => {
        const newDays = prev.includes(day) 
          ? prev.filter(d => d !== day && d !== "All Days")
          : [...prev.filter(d => d !== "All Days"), day];
        return newDays;
      });
    }
  };

  return (
    <div className="flex-1 space-y-6 p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Create New Strategy</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              Venkatesh
              <div className="w-6 h-6 bg-muted rounded-full"></div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Import Strategy Section */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm">Import Strategy from</span>
              <div className="w-5 h-5 bg-black rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">S</span>
              </div>
              <span className="text-sm font-medium">StockMock</span>
            </div>
            <Input placeholder="Paste Your Strategy URL" className="flex-1 max-w-md" />
            <Button className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Import
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Strategy Feature */}
        <Card>
          <CardHeader>
            <CardTitle>Strategy Feature</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="strategy-name">Strategy Name</Label>
              <Input id="strategy-name" className="mt-1" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Instruments</Label>
                <Select defaultValue="nifty50">
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nifty50">NIFTY 50</SelectItem>
                    <SelectItem value="banknifty">BANK NIFTY</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label>Underlying</Label>
                <Select defaultValue="cash">
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cash">Cash</SelectItem>
                    <SelectItem value="futures">Futures</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label>Order Type</Label>
              <div className="flex mt-1">
                <Button
                  variant={orderType === "MIS" ? "default" : "outline"}
                  onClick={() => setOrderType("MIS")}
                  className="rounded-r-none"
                >
                  MIS
                </Button>
                <Button
                  variant={orderType === "CNC" ? "default" : "outline"}
                  onClick={() => setOrderType("CNC")}
                  className="rounded-l-none"
                >
                  CNC
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Time Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Time Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Strategy Feature</Label>
              <div className="flex mt-1">
                <Button
                  variant={strategyFeature === "Intraday" ? "default" : "outline"}
                  onClick={() => setStrategyFeature("Intraday")}
                  className="rounded-r-none"
                >
                  Intraday
                </Button>
                <Button
                  variant={strategyFeature === "Positional" ? "default" : "outline"}
                  onClick={() => setStrategyFeature("Positional")}
                  className="rounded-l-none"
                >
                  Positional
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="immediate" />
              <Label htmlFor="immediate">Immediate</Label>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Start Time</Label>
                <Input type="time" defaultValue="09:16:00" className="mt-1" />
              </div>
              <div>
                <Label>End Time</Label>
                <Input type="time" defaultValue="15:20:00" className="mt-1" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Add Leg Section */}
      <Card>
        <CardHeader>
          <CardTitle>Add Leg</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Segments</TableHead>
                  <TableHead>Positions</TableHead>
                  <TableHead>Option Type</TableHead>
                  <TableHead>Strike Criteria</TableHead>
                  <TableHead>Strike Type</TableHead>
                  <TableHead>Expiry</TableHead>
                  <TableHead>Lots</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="flex gap-1">
                      <Badge variant="default">OPT</Badge>
                      <Badge variant="outline">FUT</Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Badge variant="default" className="bg-green-600">Buy</Badge>
                      <Badge variant="outline">Sell</Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Badge variant="outline">CE</Badge>
                      <Badge variant="outline">PE</Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Select defaultValue="atm-type">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="atm-type">ATM Type</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Select defaultValue="atm">
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="atm">ATM</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Select defaultValue="weekly">
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekly">Weekly</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="text-primary">
                      Add Leg
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Overall MTM Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Overall MTM Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Switch id="overall-target" />
                  <Label htmlFor="overall-target" className="text-sm">Overall Target</Label>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">MTM</Badge>
                  <Input defaultValue="0" className="w-16 h-8" />
                  <Input defaultValue="0" className="w-16 h-8" />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Switch id="target-re-entry" />
                  <Label htmlFor="target-re-entry" className="text-sm">Target Re-entry</Label>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">MTM</Badge>
                  <Input defaultValue="0" className="w-16 h-8" />
                  <Input defaultValue="0" className="w-16 h-8" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Switch id="overall-stoploss" />
                  <Label htmlFor="overall-stoploss" className="text-sm">Overall stoploss</Label>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">MTM</Badge>
                  <Input defaultValue="0" className="w-16 h-8" />
                  <Input defaultValue="0" className="w-16 h-8" />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Switch id="sl-re-entry" />
                  <Label htmlFor="sl-re-entry" className="text-sm">SL Re-entry</Label>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">MTM</Badge>
                  <Input defaultValue="0" className="w-16 h-8" />
                  <Input defaultValue="0" className="w-16 h-8" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Switch id="no-re-entry" />
                <Label htmlFor="no-re-entry" className="text-sm">No Re-entry/Re-Executed Journey After</Label>
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15min">15 minutes</SelectItem>
                  <SelectItem value="30min">30 minutes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Smart Margin & Profit Management */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Smart Margin Execution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Switch id="sell-delayed" />
                  <Label htmlFor="sell-delayed" className="text-sm">Sell will be delayed by</Label>
                </div>
                <Input placeholder="Sec" className="bg-muted" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Profit Management System</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Switch id="profit" />
                  <Label htmlFor="profit" className="text-sm">Profit</Label>
                </div>
                <Input placeholder="Lock Profit" className="bg-muted" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Days to Execute */}
      <Card>
        <CardHeader>
          <CardTitle>Days to Execute</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {["All Days", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
              <Badge
                key={day}
                variant={selectedDays.includes(day) ? "default" : "outline"}
                className="cursor-pointer flex items-center gap-1"
                onClick={() => toggleDay(day)}
              >
                {day}
                {selectedDays.includes(day) && (
                  <X className="h-3 w-3" onClick={(e) => {
                    e.stopPropagation();
                    toggleDay(day);
                  }} />
                )}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-center pb-6">
        <Button className="px-8">Save Strategy</Button>
      </div>
    </div>
  );
};

export default CreateStrategy;