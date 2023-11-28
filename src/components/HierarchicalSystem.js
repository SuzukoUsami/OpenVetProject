import Breadcrumbs from "./Breadcrumbs";

export default function HierarchicalSystem() {
    return (
        <div>
            <div>
                <Breadcrumbs/>
            </div>

            <div className="accordion accordion-flush" id="accordionHierarchy">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                        >
                            Head
                        </button>
                    </h2>

                    <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionHierarchy"
                    >
                        <div className="accordion-body">
                            Placeholder content for this accordion, which is
                            intended to demonstrate the .accordion-flush class.
                            This is the first item's accordion body.
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    );
}
