import React from 'react';

export function FathymDiagram() {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        {/* Main Container */}
        <div className="border-2 border-[#6D3AD0] rounded-lg p-8 bg-[#0f0f1a]">
          
          {/* Change Request */}
          <div className="mb-6">
            <h2 className="text-center text-[#80FFFF] mb-4">CHANGE REQUEST (Human or AI)</h2>
            <div className="flex justify-center">
              <div className="text-[#6D3AD0] text-2xl">▼</div>
            </div>
          </div>

          {/* CLI Stage Gates */}
          <div className="border-2 border-[#8B5CF6] rounded-lg p-6 bg-[#12121f] mb-6">
            <h3 className="text-center text-[#C589FF] mb-6">CLI STAGE GATES</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <StageBox 
                title="Baseline"
                description="Verify state"
              />
              <StageBox 
                title="Analysis"
                description="Research only"
                showArrow
              />
              <StageBox 
                title="Design"
                description="Plan approval"
                showArrow
              />
              <StageBox 
                title="Implement"
                description="Execute changes"
                showArrow
              />
            </div>

            {/* Arrows pointing down */}
            <div className="flex justify-center mb-4">
              <div className="text-[#6D3AD0] text-2xl">▼</div>
            </div>

            {/* Human Approval Box */}
            <div className="border-2 border-[#A78BFA] rounded-lg p-5 bg-[#0a0a14]">
              <h4 className="text-center text-[#C589FF] mb-3">HUMAN APPROVAL REQUIRED</h4>
              <p className="text-center text-[#9D6FDB] text-sm">
                AI cannot skip stages. Humans decide when to proceed.
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center mb-6">
            <div className="text-[#6D3AD0] text-2xl">▼</div>
          </div>

          {/* EaC Governance Layer */}
          <div className="border-2 border-[#0080FF] rounded-lg p-6 bg-[#12121f] mb-6">
            <h3 className="text-center text-[#00D9D9] mb-6">EaC GOVERNANCE LAYER</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <GovernanceBox 
                title="RBAC"
                items={["Who can", "access what"]}
              />
              <GovernanceBox 
                title="Quotas"
                items={["How much", "resource"]}
              />
              <GovernanceBox 
                title="Rate Limits"
                items={["How fast", "per tenant"]}
              />
            </div>

            {/* Audit Logging */}
            <div className="border-2 border-[#00CED1] rounded-lg p-5 bg-[#0a0a14]">
              <h4 className="text-center text-[#00D9D9] mb-3">AUDIT LOGGING</h4>
              <p className="text-center text-[#00A8A8] text-sm">
                Every change recorded: Who • What • When • Why • AI/Human
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center mb-6">
            <div className="text-[#6D3AD0] text-2xl">▼</div>
          </div>

          {/* Synaptic AI Governance */}
          <div className="border-2 border-[#8B5CF6] rounded-lg p-6 bg-[#12121f] mb-6">
            <h3 className="text-center text-[#C589FF] mb-6">SYNAPTIC AI GOVERNANCE</h3>
            
            {/* Circuits as EaC Artifacts */}
            <div className="border border-[#6D3AD0] rounded-lg p-5 bg-[#0a0a14] mb-4">
              <h4 className="text-center text-[#A78BFA] mb-3">Circuits as EaC Artifacts</h4>
              <ul className="text-[#9D6FDB] text-sm space-y-2">
                <li>• Versioned in git like any other config</li>
                <li>• Portable between environments</li>
                <li>• Governance inherited from parent EaC</li>
                <li>• Multi-tenant isolation enforced</li>
              </ul>
            </div>

            {/* MCP Bridge Governance */}
            <div className="border border-[#6D3AD0] rounded-lg p-5 bg-[#0a0a14]">
              <h4 className="text-center text-[#A78BFA] mb-3">MCP Bridge Governance</h4>
              <ul className="text-[#9D6FDB] text-sm space-y-2">
                <li>• AI tools access data through governed MCP servers</li>
                <li>• Permissions scoped per tool/resource</li>
                <li>• Audit trail of all AI data access</li>
              </ul>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center mb-6">
            <div className="text-[#6D3AD0] text-2xl">▼</div>
          </div>

          {/* Governed Deployment */}
          <div>
            <h2 className="text-center text-[#80FFFF]">GOVERNED DEPLOYMENT</h2>
          </div>

        </div>
      </div>
    </div>
  );
}

function StageBox({ 
  title, 
  description,
  showArrow = false
}: { 
  title: string; 
  description: string;
  showArrow?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="border-2 border-[#6D3AD0] rounded-lg p-4 bg-[#0a0a14] flex-1">
        <h4 className="text-center text-[#A78BFA] mb-2">{title}</h4>
        <div className="text-[#8B7AA8] text-sm text-center">
          <p>{description}</p>
        </div>
      </div>
      {showArrow && (
        <div className="text-[#6D3AD0] text-xl hidden lg:block">→</div>
      )}
    </div>
  );
}

function GovernanceBox({ 
  title, 
  items 
}: { 
  title: string; 
  items: string[];
}) {
  return (
    <div className="border-2 border-[#00A8A8] rounded-lg p-4 bg-[#0a0a14]">
      <h4 className="text-center text-[#00D9D9] mb-3">{title}</h4>
      <div className="text-[#00CED1] text-sm space-y-1">
        {items.map((item, idx) => (
          <p key={idx} className="text-center">{item}</p>
        ))}
      </div>
    </div>
  );
}